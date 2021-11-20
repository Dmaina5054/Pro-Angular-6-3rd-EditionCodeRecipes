export class Model {
  //globals here
  user;
  items: any;

  constructor(){
    this.user = 'Daniel';
    this.items = [
      //use interface and create obj
      new TodoItem("Attend Angular Bootcamp",false),
      new TodoItem("Mock Daraja API using postman", false),
      new TodoItem("Ingest Data to Influxdb",false),
      new TodoItem("Test building name Tag for Influx ping plugin",false),
      new TodoItem("Implement AP ingester Pipeline",true)
    ]
  }
}

//define an interface for todoitem
//since class we can implement constructor
export class TodoItem {
  action: string;
  done: boolean;

  constructor(action: string,done:boolean | any){
    this.action = action;
    this.done = done;
  }
}


