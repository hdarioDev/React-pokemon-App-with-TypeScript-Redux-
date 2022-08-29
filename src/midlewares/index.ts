export const logger = (store: any) => (next: any) => (action: any) => {
    // console.log("action ", action);
    next(action);//send reducer

}

export const featuring = (store: any) => (next: any) => (action: any) => {
    const updatedAction = {
        ...action,
    }
    next(updatedAction)
}