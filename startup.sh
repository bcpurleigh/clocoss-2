# startup.sh numOfVms
echo "Script Started!";

sudo apt-get -y update;

#install git
sudo apt-get -y install git;

echo "Git installed";

echo "Installing Node";

# Change to what ever version you want here see link to versions below
sudo curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -;
sudo apt-get install -y nodejs;
