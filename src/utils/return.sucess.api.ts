export class ReturnSuccess {

    constructor(Status: number, Success: boolean, Message: string) {
        this.status = Status
        this.success = Success
        this.message = Message
    }

    status: number
    success: boolean
    message: string
}