export class TopbarLink{
    route!: string;
    label!: string;

    constructor(route: string, label: string){
        this.setLabel(label);
        this.setRoute(route);
    }

    getRoute(){
        return this.route;
    }

    setRoute(route: string){
        this.route = route;
    }

    getLabel(){
        return this.label;
    }

    setLabel(label: string){
        this.label = label;
    }
}