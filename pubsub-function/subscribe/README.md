Deploy subscribe
```bash
gcloud functions deploy subscribe \
        --trigger-topic MY_TOPIC \
        --runtime nodejs8 --entry-point=subscribe
```

See logs subscriber
```bash
gcloud functions logs read subscribe
```