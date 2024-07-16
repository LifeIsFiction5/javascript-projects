// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("check organization type", function() {
  expect(launchcode.organization).toEqual("nonprofit");
  });

  test("check execustive director name", function () {
  expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("check percentage of cool employees", function () {
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });

  test("Programs offered by Launchcode", function () {
    expect(launchcode.programsOffered).toEqual(["Web Development", "Data Analysis", "Liftoff"]);
  });

  test("check launch output for number ONLY divisible by 2", function (){
    expect(launchcode.launchOutput(2)).toEqual("Launch!");
  });

  test("check launch output for number ONLY divisible by 3", function() {
    expect(launchcode.launchOutput(3)).toEqual('Code!');
  });

  test("check launch output for number ONLY divisible by 5", function() {
    expect(launchcode.launchOutput(5)).toEqual('Rocks!');
  });

  test("check launch output for number divisible by 2 AND 3", function() {
    expect(launchcode.launchOutput(6)).toEqual('LaunchCode!');
  });

  test("check launch output for number divisible by 3 AND 5", function() {
    expect(launchcode.launchOutput(15)).toEqual('Code Rocks!');
  });

  test("check launch output for number divisible by 2 AND 5", function() {
    expect(launchcode.launchOutput(10)).toEqual('Launch Rocks! (CRASH!!!)');
  });

  test("check launch output for number divisible by 2, 3, AND 5", function() {
    expect(launchcode.launchOutput(30)).toEqual('LaunchCode Rocks!');
  });

  test("check launch output for number NOT divisible by 2, 3, or 5", function() {
    expect(launchcode.launchOutput(7)).toBe("Rutabagas! That doesn't work.");
  });


});