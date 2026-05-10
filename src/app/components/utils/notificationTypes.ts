export enum notificationCat{
    INFO = "bg-primary",
    WARNING = "bg-warning",
    ERROR = "bg-danger",
    SUCCESS = "bg-success"
}

export type notificationType = {

    category:notificationCat,
    message:string
}


export function resetNotification():notificationType{
    return {
        category:notificationCat.INFO,
        message:""
    }
}