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


// Low Level Module
class FileLogger {
    logMessage(message: string) {
        fs.writeFileSync("somefile.txt", message)
    }
}

// High Level Module
class MessageProcessor {

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
    private logger = new FileLogger()

    processMessage(message: string) {
        this.logger.logMessage(message)
    }

}