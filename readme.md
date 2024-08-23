You can use this app as your final year project. Where you can write, read, update and delete the data. 

## how to setup
### mongoDB
1. create an account in mongoDB atlas
2. create a cluster with free tier (you cannot change the cluster name later🤨)
3. modify network (with what IP address) and database access (who can access the database) according to your needs.
4. get the connection string

### local setup
0. node is prerequisite 🍃
1. either download or clone this repo 💽
2. run following commands -
  - `npm install` (it will install necessary package to run your project)
  - `npm start` (it will run nodemon)
3. Now create a `.env` with following parameters
```env
MONGO_URI = mongodb+srv://<user-name>:<password>@cluster0.durng6q.mongodb.net/<db-name>?retryWrites=true&w=majority&appName=Cluster0
```

`note:` connection will only get established when you are successfully connected to MongoDB server.

you can reach out to me at either `aryankhandelwal15@gmail.com ` or my website `aryankhandelwal.in`.
