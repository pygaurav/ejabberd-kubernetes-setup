
# XMPP Using Docker & Kubernetes - Ejabberd

In order to run Ejabberd - You must need to have docker and kubernetes installed on your machine - You can use Docker Desktop & Enable Kubernetes in settings. Also install kubectl on your machine.


Execute the following commands


`kubectl apply -f xmpp.yaml`

This command will deploy the pod to the kubernetes cluster using ejabberd docker image.

`kubectl apply -f xmpp-service.yaml` 

This will redirect the port 5222 to any port ranging between 30K to 40K to your machine.

`kubectl apply -f xmpp-service-5280.yaml`

This will redirect the port 5280 to any port ranging between 30K to 40K to your machine.

Note: In order to check the port of 30K to 40K & able to run on your machine execute the below command.

`kubectl get services`

It will give results like

---

xmpp         NodePort    10.108.165.33   <none>        5222:**31722**/TCP   50m

In this case port of 5222 become **31722** on your machine.

---

xmpp-5280    NodePort    10.105.2.221    <none>        5280:**30501**/TCP   3m39s

In this case port of 5280 become **30501** on your machine.

---

**Bonus Note:** Don't forget to change this port on the nodejs code ;).



