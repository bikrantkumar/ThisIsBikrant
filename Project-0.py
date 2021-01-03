from pycricbuzz import Cricbuzz
import json
import re
import pickle
import pandas as pd
import numpy as np
# for web apps
import streamlit as st
import plotly.express as px
from wordcloud import WordCloud, STOPWORDS
import matplotlib.pyplot as plt

ids =[ x for x in range(30330,30520,5) ]
ids.append(30354)
ids.append(30369)
ids.append(30384)
ids.append(30399)
ids.append(30404)
ids.append(30409)
ids.append(30414)
ids.append(30419)
ids.append(30424)
ids.append(30429)
ids.append(30434)
ids.append(30439)
ids.append(30449)
ids.append(30454)
ids.append(30459)
ids.append(30464)
ids.append(30469)
ids.append(30474)
ids.append(30479)
ids.append(30484)
ids.append(30489)
ids.append(30494)
ids.append(30504)
ids.append(30519)
ids.append(30524)
ids.append(30529)
ids.append(30534)
ids.append(30539)
ids.append(31613)
ids.append(31617)
ids.append(31618)
ids.append(31622)
ids.remove(30335)
ids.remove(30400)
ids.remove(30405)
ids.remove(30410)
ids.remove(30425)
ids.remove(30435)
ids.remove(30455)
ids.remove(30470)
ids.remove(30480)
ids.remove(30485)
ids.remove(30490)
ids.sort()
ids = [str(x) for x in ids]

def remove_html_tags(text):
    """Remove html tags from a string"""
    import re
    clean = re.compile('<.*?>')
    return re.sub(clean, '', text)

# bit heavy funtion so had to use it now app works smooth f
#@st.cache(persist=True)
def commentary(mid):
    print(mid)
    c = Cricbuzz()
    comm = c.commentary(mid)
    comstring = comm["commentary"]
    #print(comm)
    #co = json.loads(comm)
    #co = json.dumps(comm, indent=4, sort_keys=True)
    a =""
    for i in comstring:
        a = a + i["comm"]
    b = remove_html_tags(a)
    if len(b) == 0:
        print(type(b))
    return(b)

#collecting all the commentary and storing them cuz data consumptionwas too high everytime i had to download data
def store():
    comm = [{i : [commentary(ids[i])]} for i in range(len(ids))]
    print(comm)
    with open("commentary.pickle","wb") as icomm:
            pickle.dump(comm,icomm)
    
#store()
def matchobjectlist():
    c = Cricbuzz()
    
    matchobjects= [c.matchinfo(ids[i]) for i in range(len(ids))]
    
    print(matchobjects)
    with open("ipl.pickle","wb") as ipl:
        pickle.dump(matchobjects,ipl)
#matchobjectlist()

pickle_in = open("commentary.pickle","rb")
listofdic = pickle.load(pickle_in)

#still the output is wierd so after putting into a data frame had to transpose is(cuz colums major loks bad) and reversed it
dictionary = {}
for i in range(len(listofdic)):
    dictionary.update(listofdic.pop())
df = pd.DataFrame(dictionary, index=["text"])
df = df.transpose()
df = df.iloc[::-1]
#print(df)

from nltk.corpus import stopwords
from nltk.stem import SnowballStemmer
from textblob import TextBlob

stemmer = SnowballStemmer('english')
words = stopwords.words("english")

df['clean'] = df['text'].apply(lambda x: " ".join([stemmer.stem(i) for i in re.sub("[^a-zA-Z]", " ", x).split() if i not in words]).lower())
#lambda was giving errors so had to make funtions
def getpolarity(text):
    return TextBlob(text).sentiment.polarity
def getsubjectivity(text):
    return TextBlob(text).sentiment.subjectivity
df["polarity"] = df["clean"].apply(getpolarity)
df["subjectivity"] = df["clean"].apply(getsubjectivity)
df["stars"] = ((df["polarity"] + df["subjectivity"])*10).apply(np.floor)

st.title("IPL analysis using NLP")
st.markdown("Dashboard for Analysis")
st.sidebar.title("IPL analysis")
st.sidebar.markdown("Dashboard for Analysis")

#opening matchifo
#input for user
pickle_in = open("ipl.pickle","rb")
allmatches = pickle.load(pickle_in)
#printing information of the match
matchid = st.sidebar.slider("ENTER THE MATCH NO",0,len(ids))
st.write(allmatches[matchid]['mnum'])
st.write(allmatches[matchid]['team1']['name'],"VS" , allmatches[matchid]['team2']['name'])
st.write(allmatches[matchid]['toss'])
st.write(allmatches[matchid]['status'])
stars = df.iloc[matchid:matchid+1 ,-1]
st.write("Ratings of the match : ",int(stars),"stars")

#checking user control for dispalying and pltoing objects
#streamlit handles data bit diffrently so had to try out diffrent styles but now it is more than ok
#st.write(allmatches[matchid][df["stars"]])
if st.sidebar.checkbox("Squad of Team 1",key=1):
	ndft1 = allmatches[matchid]["team1"]["squad"]
	#ndft1 = pd.DataFrame(ndft1,index=["index"])
	#ndft1.set_index("Players")
	st.dataframe(ndft1)
if st.sidebar.checkbox("Squad of Team 2",key=2):
	ndft2 = allmatches[matchid]["team2"]["squad"]
	st.dataframe(ndft2)

#using plotlyexpress for entire data and per match
if st.sidebar.checkbox("Entire wordcloud",key=4):
	totalinput = "".join(commentary(ids[i]) for i in range(len(ids)))
	#print(type(totalinput))
	#words = " ".join(text["text"])
	#processed_words = " ".join([word for word in words.split() ])
	#st.sidebar.markdown("##could take few seconds ")
	wordcloud = WordCloud(stopwords=STOPWORDS,background_color="black" , height = 600 , width= 600,relative_scaling=0.5).generate(str(totalinput))
	plt.imshow(wordcloud)
	plt.xticks([])
	plt.yticks([])
	st.pyplot()
if st.sidebar.checkbox("Match wordcloud",key=3):
	words = "".join(commentary(str(ids[matchid])))
	#words = " ".join(text["text"])
	#processed_words = " ".join([word for word in words.split() ])
	wordcloud = WordCloud(stopwords=STOPWORDS,background_color="black" , height = 600 , width= 600,relative_scaling=0.5).generate(str(words))
	plt.imshow(wordcloud)
	plt.xticks([])
	plt.yticks([])
	st.pyplot()

if st.sidebar.checkbox("Match Summary",key=5):
	words = df.iloc[matchid:matchid+1 ,0]
	st.table(words)

if st.sidebar.checkbox("Raw data",key=6):
	st.dataframe(df)
