sed -i 's/API_KEY_CREDENTIAL/${{ env.API_KEY_CREDENTIAL }}/g' firebase-config.js 
sed -i 's/AUTH_DOMAIN_CREDENTIAL/${AUTH_DOMAIN_CREDENTIAL}/g' firebase-config.js
sed -i 's/PROJECT_ID_CREDENTIAL/${PROJECT_ID_CREDENTIAL}/g' firebase-config.js
sed -i 's/STORAGE_BUCKET_CREDENTIAL/${STORAGE_BUCKET_CREDENTIAL}/g' firebase-config.js
sed -i 's/MESSAGING_SENDER_ID_CREDENTIAL/${MESSAGING_SENDER_ID_CREDENTIAL}/g' firebase-config.js
sed -i 's/MEASUREMENT_ID_CREDENTIAL/${MEASUREMENT_ID_CREDENTIAL}/g' firebase-config.js
sed -i 's/APP_ID_CREDENTIAL/${APP_ID_CREDENTIAL}/g' firebase-config.js