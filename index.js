/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 *
 * EXAMPLE
 * trimProperties({ name: '  jane  ' }) // returns a new object { name: 'jane' }
 */

const trim_obj_helper = (obj, action) => {
  let trimmed_obj

  if (action === 'copy') {
    trimmed_obj = obj

  } else if (action === undefined) {
    trimmed_obj = {}
  }

  for (const key in obj) {
    const trimmed_key_value = obj[key].trim()

    trimmed_obj[key] = trimmed_key_value // I originally has this to trimmed_obj = {...trimmed_obj, [key] : trimmed_key_value} THIS DIDN'T WORK and caused me a ton of trouble. That's a copy Jayden, not a direct reference. I won't forget next time...
  }

  return trimmed_obj

}

function trimProperties(obj) {
  // ✨ implement

  let trimmed_obj = trim_obj_helper(obj)

  return trimmed_obj
}

/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed
 *
 * EXAMPLE
 * trimPropertiesMutation({ name: '  jane  ' }) // returns the object mutated in place { name: 'jane' }
 */
function trimPropertiesMutation(obj) {

  let trimmed_obj = trim_obj_helper(obj, 'copy')

  return trimmed_obj

  // ✨ implement
}

/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of objects { integer: 1 }
 * @param {object[]} integers - an array of objects
 * @returns {number} - the largest integer
 *
 * EXAMPLE
 * findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]) // returns 3
 */
function findLargestInteger(integers) {
  // ✨ implement

  let largest_integer = integers[0].integer

  integers.forEach(num => {
    if (num.integer > largest_integer) {
      largest_integer = num.integer
    }
  })

  return largest_integer

}

class Counter {
  /**
   * [Exercise 4A] Counter creates a counter
   * @param {number} initialNumber - the initial state of the count
   */
  constructor(initialNumber) {
    // ✨ initialize whatever properties are needed
    this.initialNumber = initialNumber,
    this.calls = 0
  }

  /**
   * [Exercise 4B] Counter.prototype.countDown counts down to zero
   * @returns {number} - the next count, does not go below zero
   *
   * EXAMPLE
   * const counter = new Counter(3)
   * counter.countDown() // returns 3
   * counter.countDown() // returns 2
   * counter.countDown() // returns 1
   * counter.countDown() // returns 0
   * counter.countDown() // returns 0
   */
  countDown() {
    // ✨ implement
    if (this.calls === 0) {
      this.increment_call_count()
      return this.initialNumber
    } else if (this.calls === 1) {
      this.decrement_initialNumber()
      return this.initialNumber
    }
  }

  decrement_initialNumber() {
    if (this.initialNumber === 0) {
      return this.initialNumber
    } else {
      this.initialNumber -= 1
    }
  }

  increment_call_count() {
    this.calls += 1
  }
}

class Seasons {
  /**
   * [Exercise 5A] Seasons creates a seasons object
   */
  constructor() {
    // ✨ initialize whatever properties are needed
    this.count = 0
    this.seasons_list = ['summer', 'fall', 'winter', 'spring']
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"
   *
   * EXAMPLE
   * const seasons = new Seasons()
   * seasons.next() // returns "summer"
   * seasons.next() // returns "fall"
   * seasons.next() // returns "winter"
   * seasons.next() // returns "spring"
   * seasons.next() // returns "summer"
   */

  rollback_count(){
    this.count = (this.count / this.count) - 1
  }

  increment_count() {
    this.count += 1
  }

  next() {
    if (this.count === this.seasons_list.length){
      this.rollback_count()
    }

    let current_season = this.seasons_list[this.count]
    this.increment_count()
    return current_season

    // ✨ implement
  }
}


class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.odometer = 0 // car initilizes with zero miles
    this.tank = tankSize // car initiazes full of gas
    this.name = name
    this.tankSize = tankSize
    this.mpg = mpg
    this.difference_gas_usage = 0
    this.difference_miles_driven = 0
    // ✨ initialize whatever other properties are needed
  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(100) // returns 100
   * focus.drive(100) // returns 200
   * focus.drive(100) // returns 300
   * focus.drive(200) // returns 500
   * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
   */
  drive(distance) {
    if (this.tank === 0){
      return 'Tank empty!'
    }

    const fuel_usage = Math.round(distance / this.mpg)
    const is_fuel_usage_more_than_tankSize = fuel_usage > this.tank ? true : false

    if (is_fuel_usage_more_than_tankSize){
      this.difference_gas_usage = Math.round(fuel_usage - this.tank)
      this.difference_miles_driven = Math.round(distance) - Math.round(this.tank * this.mpg)
      this.odometer = this.odometer + Math.round(this.tank * this.mpg)
      this.tank = 0

    } else {
      this.tank = Math.round(this.tank - fuel_usage)
      this.odometer = Math.round(this.odometer + distance)

    }

    return this.odometer
    // ✨ implement
  }

  get_tank(){
    return this.tank
  }
  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(600) // returns 600
   * focus.drive(1) // returns 600 (no distance driven as tank is empty)
   * focus.refuel(99) // returns 600 (tank only holds 20)
   */
  refuel(gallons) {
    let amount_can_drive
    if (this.tank === this.tankSize){
      amount_can_drive = this.tank * this.mpg
      return amount_can_drive
    }
    
    if (this.tankSize < gallons){
      this.tank = this.tankSize
      //const amount_unable_to_fill = gallons - this.tankSize
    } else {
      this.tank = this.tank + gallons
    }

    amount_can_drive = this.tank * this.mpg
    return amount_can_drive
    // ✨ implement
  }
}

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 */
async function isEvenNumberAsync(number) {
  // ✨ implement
  if (number % 2 !== 0){
    return false
  } else {
    return true
  }
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
