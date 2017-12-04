# PaaS-based API with persistent data storage: clocoss-2

A server to implement and create a API server using Google App Engine to provide a simple storage solution for numeric values.
## Installation:
1. Clone the repo to a [Google Cloud SDK](https://cloud.google.com/sdk/docs/) enabled cli with https,http-server tags and full access to the Google Cloud API enabled.
2. Install Node and npm on your server. Use the startup.sh script provided to install Node and install the pre-requisites.
```
bash startup.sh
```
3. Enter the clocoss-2 directory (or wherever you installed to) then run:
```
npm install -y
gcloud app deploy
```
4. You're done!
