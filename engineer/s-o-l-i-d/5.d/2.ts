/**
 * DIP : Dependency Inversion Principle
 * 
 * ***Hight level modules should not depend on low level modules
 * ***Both should depend on Abstraction
 * 
 * Functionality of the application should not rely on specific implementation, 
 * 
 * in order to make the system more flexible and easier to update or replace
 * low - level implementation
 * 
 * 
 * Abstraction should not depends on details, details should depends on abstraction
 * 
 * This encourages the design to focus on what operations are actually needed rather than
 * on how those operations are implemented 
 * 
 * */

import fs from 'fs'


interface Logger{
    logMessage(message:string):void
}

// Low Level Module #1
class FileLogger implements Logger {
    logMessage(message: string) {
        fs.writeFileSync("somefile.txt", message)
    }
}

// Low Level Module # 2
class ConsoleLogger implements Logger {
    logMessage(message: string) {
        fs.writeFileSync("somefile.txt", message)
    }
}


// High Level Module
class MessageProcessor  {

    /***
     * 
     * DIP Violation : This hight-level module is tightly coupled with the low-level module (FileLogger)
     * making the system less flexible and harder to maintain or extended
     * 
     * if we would want to log in database and not in file, we would be forced to directly modify
     * managerProcessor function
     * 
     * 
     * */
    private _logger = new FileLogger()

    constructor(logger:Logger) {
        this._logger=logger
    }

    processMessage(message: string) {
        this._logger.logMessage(message)
    }
}

const fileLogger = new FileLogger()
const consoleLogger = new ConsoleLogger()

// now the logging mechanism can be easily replaced
const messageProcessor= new MessageProcessor(consoleLogger)
messageProcessor.processMessage("hello")