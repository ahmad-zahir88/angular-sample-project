# Angular Sample Project

The project is a simple website built on Angular on the frontend side with PHP on its backend as well as MySQL as the database.

## Requirements to run the app
1. PHP (tested on: v8.1.7) [Download](https://www.php.net/downloads.php)
2. Nginx (tested on: v1.22.0) [Download](http://nginx.org/en/download.html)
3. Node.js (tested on: v16.15.1) [Download](https://nodejs.org/en/download/)
4. MySQL (tested on: v8.0.29) [Download](https://www.mysql.com/downloads/)

## Initialisation
In this initialisation part, we assume that you have a clean installation of all the requirements stated above.

If you have installed and used the tech stacks mentioned in the requirements prior to this, these instructions below might not work and you might lose some/all of your configurations and/or data. Proceed at your own risk.
### Backend
1. Copy the file `nginx.conf` from `config/` to your `conf/` folder inside your Nginx installation folder.

2. Copy the file `php.ini` from `config/` to your php installation folder.

### Database
1. Log into mysql by typing `mysql` in your terminal. Login with the default username `root` and leave the password blank. 
- You can follow these steps one by one or you can simply copy the command found at `config/sql-init.txt` and paste it into the terminal.

2. Create a database called `angular_sample_database` by typing these code below
```sql
CREATE DATABASE angular_sample_database;
```

3. Create a table called `Users` into the database `angular_sample_database`
```sql
USE angular_sample_database;

CREATE TABLE Users(
    id INT NOT NULL AUTO_INCREMENT,
    fullname VARCHAR(320) NOT NULL,
    email VARCHAR(120) NOT NULL,
    address VARCHAR(640) NOT NULL,
    dob DATE NOT NULL,
    gender INT NOT NULL,
    occupation VARCHAR(120) NOT NULL,
    PRIMARY KEY (id)
);
```

4. (Optional) Insert dummy data into the table
```sql
INSERT INTO Users 
(fullname, email, address, dob, gender, occupation)
VALUES
('John Doe', 'john@doe.com', '123 John St\nCanberra 2612',0,'Frontend Developer');

INSERT INTO Users 
(fullname, email, address, dob, gender, occupation)
VALUES
('Jane Doe', 'jane@doe.com', '456 Jane St\nCanberra 2613',1,'Backend Developer');
```
### Frontend
1. Open the terminal and change its directory to this folder
2. Run `npm i` or `npm install`
3. NPM (Node Package Manager) will then install all the required dependecies stated in `package.json`

## Running the application
1. Run these three command and let them run simultaneously. These will act as the backend and database server.
    - `mysqld` 
    - `php-cgi -b 127.0.0.1:9123`
    - `nginx` 

2. Run the Angular application by typing `ng serve -o` into the terminal.

3. Once the application is running, a new window will be opened in your default browser and you will be redirected to the homepage.