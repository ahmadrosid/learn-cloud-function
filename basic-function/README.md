## Deployment

```bash
gcloud functions deploy 'basic-function' \
	--runtime nodejs8 --trigger-http \
	--entry-point=main
```

Result :
```bash
Deploying function (may take a while - up to 2 minutes)...done.
availableMemoryMb: 256
entryPoint: main
httpsTrigger:
  url: https://us-central1-kwdev-new.cloudfunctions.net/basic-function
ingressSettings: ALLOW_...
labels:
  deployment-tool: cli-gcloud
name: projects/kwdev-new...SECRET
runtime: nodejs8
serviceAccountEmail: kwdev-SECRET
sourceUploadUrl: https://storage...SENSORED
status: ACTIVE
timeout: 60s
updateTime: '2020-02-28T17:21:45.871Z'
versionId: '1'
```

## Testing

Get the output url and hit the endpoint.

```bash
curl -X GET 'https://us-central1-kwdev-new.cloudfunctions.net/basic-function'
```

Get function log
```bash
gcloud functions logs read 'basic-function'
```

Result
```
LEVEL  NAME            EXECUTION_ID  TIME_UTC                 LOG
D      basic-function  ui1krlj7fhxq  2020-02-28 17:24:00.804  Function execution started
I      basic-function  ui1krlj7fhxq  2020-02-28 17:24:00.820  Logging it's running
D      basic-function  ui1krlj7fhxq  2020-02-28 17:24:00.825  Function execution took 22 ms, finished with status code: 200
```