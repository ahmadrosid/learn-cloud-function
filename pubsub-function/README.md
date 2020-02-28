## Google cloud function trigger pubsub

1. Create topic
```bash
gcloud pubsub topics create MY_TOPIC
```

2. Deploy publish function
```bash
cd learn-cloud-function/pubsub-function/publish
gcloud functions deploy publish --trigger-http --runtime nodejs8
```

3. Deploy subscribe function
```bash
cd learn-cloud-function/pubsub-function/subscribe
gcloud functions deploy subscribe \
        --trigger-topic MY_TOPIC \
        --runtime nodejs8 --entry-point=subscribe
```

4. Test publish message
Using gcloud
```bash
gcloud functions call publish --data '{"topic":"MY_TOPIC","message":"Hello World!"}'
```

Using curl
```bash
curl https://us-central1-kwdev-new.cloudfunctions.net/publish -X POST  -d "{\"topic\": \"MY_TOPIC\", \"message\":\"Testing one\"}" -H "Content-Type: application/json"
```

5. Get cloud function logs subscriber
```bash
gcloud functions logs read subscribe
```