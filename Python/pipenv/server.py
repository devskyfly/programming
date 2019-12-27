import socket

try:
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    host = socket.gethostname()
    port = 9998
    s.bind((host, port))

    s.listen(5)

    print("Server listning %s:%s" % (str(host), str(port)))

    while True:
        clientsocket, addr = s.accept()
        print("Got a connection from %s" % str(addr))
        msg = 'Thank you for connectiong' + "\r\n"
        clientsocket.send(msg.encode('ascii'))
        clientsocket.close()
except KeyboardInterrupt:
    print("Server stopped")
    s.close