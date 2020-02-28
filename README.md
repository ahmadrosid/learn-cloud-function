# Learn google cloud function

Google Cloud Functions is a lightweight compute solution for developers to create single-purpose, stand-alone functions that respond to Cloud events without the need to manage a server or runtime environment.

## Installation
Google cloud cli :
```bash
$ curl https://sdk.cloud.google.com | bash
$ gcloud --version
$ gcloud init
```

## Deployment
Deploy http trigger cloud function
```bash
$ gcloud functions deploy FUNCTION_NAME \
	--runtime RUNTIME --trigger-http \
	--entry-point=FUNCTION_ENTRYPOINT_NAME
```

Deploy pubsub trigger cloud function
```bash
$ gcloud functions deploy FUNCTION_NAME \
	--trigger-topic FUNCTION_TOPIC \
	--runtime RUNTIME \
	--entry-point=FUNCTION_ENTRYPOINT_NAME
```

## Testing

Test trigger pubsub
```bash
$ gcloud functions call FUNCTION_NAME --data '{"topic":"FUNCTION_TOPIC","message":"Hello World!"}'
```

Test using curl
```bash
$curl https://${GCF_URL} -X POST  -d "{\"topic\": \"FUNCTION_TOPIC\", \"message\":\"Testing one\"}" -H "Content-Type: application/json"
```