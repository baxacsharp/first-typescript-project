export interface tracks{
    results: [ id: number,
        title:string,
        album:{
            id:number,
            cover_medium:string,
            title:string
        },
        artist:{
            name:string
        }]

}