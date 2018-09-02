const brain = require('brain.js')
const dataset = require('./dataset.json')
const config = {
  activation: 'sigmoid',
  iterations: 100,
  log: true,
  learningRate: 0.5,
};
const net = new brain.NeuralNetwork(config);
const data = dataset
net.train(data) 
const run = net.run({votes:72, comments: 3, value: 0.72})
console.log
const app = (req, res) => {
  res.send(run)
 
  res.end()
};

module.exports = {
  app
}
