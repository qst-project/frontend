FROM envoyproxy/envoy-dev:latest
COPY envoy5.yaml /etc/envoy/envoy5.yaml

# ADD ./cert/localhost/localhost.crt /etc/localhost.crt
# ADD ./cert/localhost/localhost.key /etc/localhost-private-key.key
# ADD ./cert/localhost/localhost.csr /etc/localhost-certificate-signing-request.csr

RUN chmod go+r /etc/envoy/envoy5.yaml

# FROM envoyproxy/envoy-dev:latest

# COPY ./envoy5.yaml /etc/envoy/envoy.yaml

# CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml -l trace --log-path /tmp/envoy_info.log