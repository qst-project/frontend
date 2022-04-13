FROM envoyproxy/envoy-dev:latest
COPY envoy3.yaml /etc/envoy/envoy3.yaml

ADD ./cert/localhost/localhost.crt /etc/localhost.crt
ADD ./cert/localhost/localhost.key /etc/localhost-private-key.key
ADD ./cert/localhost/localhost.csr /etc/localhost-certificate-signing-request.csr

RUN chmod go+r /etc/envoy/envoy3.yaml