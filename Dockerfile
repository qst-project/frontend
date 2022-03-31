FROM envoyproxy/envoy-dev:latest
COPY envoy.yaml /etc/envoy/envoy.yaml

ADD ./cert/server.crt /etc/server.crt
ADD ./cert/server.key /etc/Server-private-key.key
ADD ./cert/server.csr /etc/Server-certificate-signing-request.csr

RUN chmod go+r /etc/envoy/envoy.yaml