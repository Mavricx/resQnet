# **ResQnet — Community-Powered Emergency Response App**

A mobile-first platform that enables users to instantly alert nearby individuals during emergencies such as theft, assault, medical crises, or suspicious activity. ResQnet aims to reduce emergency response time by leveraging proximity-based notifications and real-time community support.

---

## 🚨 **Why ResQnet?**

Most people assume emergencies are handled by authorities quickly—but that’s rarely true, especially in public spaces or remote areas. Response delays often happen simply because no one nearby knows what’s happening.

ResQnet challenges this assumption by turning every nearby user into a potential helper, first responder, or witness.

---

## 🧠 **Key Features**

### 📍 **Real-Time Proximity Alerts**
When a user reports an emergency, ResQnet sends alerts to other users within a defined radius.  
This ensures fast, hyper-local assistance from people who are actually nearby.

### 🗺 **GPS-Based Event Mapping**
The app plots emergency events on a live map so responders can quickly locate the victim.

### 🔔 **Instant Notification System**
Low-latency push notifications alert users within seconds.

### 👥 **Community-Driven Safety**
Anyone within the alert radius can:
- Respond  
- Call authorities  
- Mark themselves as safe  
- Share follow-up details  

### 🛡 **Emergency Categories**
- Theft / Mugging  
- Physical Assault  
- Accident / Injury  
- Women Safety Alerts  
- Suspicious Activity  
- SOS for general emergencies  

---

## 🏛 **Architecture Overview**

### **Frontend (Mobile App)**
- **Language:** Java  
- **Framework:** Android Studio  
- **Features:**  
  - Location access  
  - Realtime notifications  
  - Emergency report interface  
  - Radius-based filtering  
  - Map screen (Google Maps API)

### **Backend**
- **Language:** Node.js  
- **Framework:** Express.js  
- **Responsibilities:**  
  - Store and fetch user details  
  - Generate and broadcast alerts  
  - Calculate radius using Haversine formula  
  - Manage authentication  
  - Push notification triggers  

### **Database**
- **MongoDB Atlas**  
  - Stores user profiles  
  - Stores emergency logs  
  - Geospatial queries for radius detection  

### **Push Notifications**
- **Firebase Cloud Messaging (FCM)**  
  - Sends instant alerts  
  - Device-to-device and server-triggered messages  

---

## 🔐 **Security Considerations**

ResQnet prioritizes user privacy and safe data handling by:

- Not storing live location unless an emergency is triggered  
- Using **JWT authentication**  
- Encrypting sensitive fields  
- Limiting event visibility strictly by radius  
- Avoiding permanent message storage  

---

## 📲 **Screens (Proposed)**

- Login / Register  
- Dashboard  
- Emergency Report Form  
- Live Map  
- Alert Feed  
- Profile & Settings  

---

## 🛠 **Installation (Developer Setup)**

### **1. Clone the Repo**
```bash
git clone https://github.com/your-username/resqnet.git
cd resqnet
```
### 2. Backend Setup
```bash
cd backend
npm install
cp .env.example .env   # add your MongoDB + Firebase keys
npm start
```
🤝 Contributing

## Contributions are welcome!
- If you're planning something major, open an issue first to discuss it.
- Fork the repo
- Create a new branch
- Commit and push your work
- Open a pull request
