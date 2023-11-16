#!/bin/bash

API_ID=$1
STAGE_NAME=$2
BURST_LIMIT=$3
RATE_LIMIT=$4
echo "Configuring rate limiting for aws:"
echo $API_ID $STAGE_NAME $BURST_LIMIT $RATE_LIMIT
aws apigateway update-stage \
  --rest-api-id $API_ID \
  --stage-name $STAGE_NAME \
  --patch-operations \
    op='replace',path='/*/*/throttling/burstLimit',value="$BURST_LIMIT" \
    op='replace',path='/*/*/throttling/rateLimit',value="$RATE_LIMIT"

echo "Rate limiting configured for stage: $STAGE_NAME."
