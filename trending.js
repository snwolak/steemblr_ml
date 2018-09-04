const brain = require('brain.js')
const dataset = require('./dataset.json')
const config = {
  activation: 'sigmoid',
  iterations: 20000,
  learningRate: 0.001,
};
const net = new brain.NeuralNetwork(config);
const data = dataset
net.train(data) 

const app = (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.status(200)
  const run = net.run(req.body)
  console.log(run)
  res.send(run)
 
  res.end()
};

module.exports = {
  app
}
