var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

var number = 1

function takeANumber(katzDeliLine) {
  katzDeliLine.push(number++)
  return number - 1
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  return "There is nobody waiting to be served!"
  }
  else {
    var customer = katzDeliLine.shift()
    return `Currently serving ${customer}.`
  } 
}
function currentLine(katzDeliLine) {
  var currentLine = []
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  
  for (let i = 0; i < katzDeliLine.length; i++) {
    currentLine.push(` ${i + 1}. ${katzDeliLine[i]}`)
  }
  return "The line is currently:" + currentLine
}