export const logger = (store: any) => (next: any) => (action: any) => {
    // console.log("action ", action);
    next(action);//send reducer

}

export const featuring = (store: any) => (next: any) => (action: any) => {
    // console.log("action add pokemon ", action);

    // const featured = [{ name: 'eddie' }, ...action.payload];//add new pokemon
    const updatedAction = {
        ...action,
        // action: { ...action.action, payload: featured },
    }
    // console.log("return  action ", updatedAction);

    next(updatedAction)
}