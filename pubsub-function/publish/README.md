Create topic
```bash
gcloud pubsub topics create MY_TOPIC
```

Deploy function publish
```bash
gcloud functions deploy publish --trigger-http --runtime nodejs8
```

Test publish message
```bash
gcloud functions call publish --data '{"topic":"MY_TOPIC","message":"Hello World!"}'
```

Using curl
```bash
curl https://us-central1-kwdev-new.cloudfunctions.net/publish -X POST  -d "{\"topic\": \"MY_TOPIC\", \"message\":\"Testing one\"}" -H "Content-Type: application/json"
```