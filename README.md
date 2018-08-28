# Pollution Monitor with Geolocation using Ionic


## Getting started with development

### 1. Install Dependencies
- Node.js 8.11.x LTS - install it suing the node.js installer form https://nodejs.org/en/download/
- NPM 5.6.0 comes with above node.js installer
- Ubuntu 17.04 or later or Linux Mint 18.2 or later (preferred)

### 2. Verify Installation
To verify you have installed everythin correctly you can run
```bash
node --version
npm --version
```
If this gives errors, resolve before moving on.

### 3. Install ionic and cordova
```bash
npm install -g ionic cordova
```
if this gives errors try to use 
```bash
sudo npm install -g ionic cordova
```
or install both ionic and cordova one by one
```bash
npm install -g ionic
npm install -g cordova
```
## Running the application

### 1. Clone this repository
```bash
git clone https://github.com/akashshuklacs/pollution-ionic
# in the cloned directory goto land_bank directory i.e.
cd pollution-ionic
```

### 2. Install Packages
```bash
npm install
```
Make sure to do this inside the directory.

### 3. Run Server
```bash
ionic serve
```
## How it works:
The website uses geolocation data using the geolocation API to find your location and then uses the Air Pollution API to find the air pollution levels of your area. Since the geolocation API is not very accurate and the phone version would use GPS for location, this is just a proof of concept.
If the website does not give tentative location, try refreshing the website using the refresh icon on the left top corner of the website to make another API call.

## Note:
The AJAX request is not working well with the mobile browsers but it can be fixed if required