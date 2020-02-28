## Deployment

```bash
gcloud functions deploy 'redirect-function' \
	--runtime nodejs8 --trigger-http \
	--entry-point=main
```

Result :
```bash
Deploying function (may take a while - up to 2 minutes)...done.
availableMemoryMb: 256
entryPoint: main
httpsTrigger:
  url: https://us-central1-kwdev-new.cloudfunctions.net/redirect-function
ingressSettings: ALLOW_...
labels:
  deployment-tool: cli-gcloud
name: projects/kwdev-new...SECRET
runtime: nodejs8
serviceAccountEmail: kwdev-..SECRET
sourceUploadUrl: https://storage...SECRET
status: ACTIVE
timeout: 60s
updateTime: '2020-02-28T17:27:39.553Z'
versionId: '1'
```

## Testing

Get the output url and hit the endpoint.

```bash
curl -X GET 'https://us-central1-kwdev-new.cloudfunctions.net/redirect-function'
```

Result
```bash
Found. Redirecting to https://avatars1.githubusercontent.com/u/29406408?v=4
```