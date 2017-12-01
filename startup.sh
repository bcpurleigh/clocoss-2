# startup.sh numOfVms
echo "Script Started!";

sudo apt-get -y update;

echo "i figured out how to run two lines!";

#install git
sudo apt-get install git;

echo "git installed";

echo "installing node";

# Change to what ever version you want here see link to versions below
sudo curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -;
sudo apt-get install -y nodejs;
