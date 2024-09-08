const divData = document.getElementById("divData");
/**
 * Clase Person que representa a una persona y su informacion 
 */
class Person {   //Propiedades / Propiedades de instancia
    /**
     * @property {String} name - Identifica el nombre de la persona
    */
    name="";
    /**
     * @property {String} email - Identifica el email de la persona
     */
    email="";
    /**
     * @property {String} age - Identifica la edad de la persona
     */
    age=0;
    /**
     * @property {String} resume - Muestra un resumen de la persona
     */
    resume="";
    /**
     * @property {Number} id -  Identifica como unica a la persona
     */
    id=0;
    /**
     * @static @property {Number} total - Propiedad estatica que lleva el conteo de total de personas
    */ 
    static total=0;  
    
            //Reglas del negocio, condicionales personalizadas para cada cliente.  Propiedad estatica solo se puede acc
    /**
     * Construcctor que permite crear un objeto del tipo Person
     * @param {String} name Identifica el nombre de la persona
     * @param {String} email Identifica el correo de la persona
     * @param {Number} age  Identifica la edad de la persona
     * @param {String} resume Muestra un resumen de la persona
     */
    constructor(name, email, age, resume){
        this.name=name.toUpperCase();
        this.email=email.toLowerCase();
        this.age=(age<18)?18:age;
        this.resume=resume;
        Person.total++;
        this.id= Person.total;
        }//constructor}
        /**
         * Escribe en la pagina un card de bootstrap con la informacion de la persona
         * @param {HTMLElement} div - Elemento donde se agrego a la informacion de la persona
         */ 
        printInfo(div){
            //console.log(this.name, this.age, this.email, this.resume);
            div.insertAdjacentHTML("beforeend",
            `<div class="card text-bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${this.id}.-${this.email}</div>
            <div class="card-body" id="cardBody_${this.id}">
              <h5 class="card-title">${this.name} - ${this.age}</h5>
              <p class="card-text">${this.resume}</p>
            </div>
          </div>`);   
        }//printInfo
        /**
         * Permite establecer el correo electronico validando el formato
         * @param {String} email - Correo que se quiere establecer
         */

        setEmail(email){
            const regex = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
            this.email=(regex.test(email))?email:"sincorreo@dominio.com";
        }//setEmail
        /**
         * Imprime el total de las personas en un alert de bootstrap
         * @param {HTMLElement} div Elemento donde se agrego a la informacion
         */
        static printTotal(div){
            div.insertAdjacentHTML("afterbegin",
                `<div class="alert alert-primary" role="alert">
                    Personas en total: <strong>${Person.total}</strong>
            </div`);
        }//printTotal
    }//class Person
    /**
     * 
     * Clase Employee que representa a un empleado y su informacion
     * @extends Person
     */
                        ////Constructor de la herencia
    class Employee extends Person{
        /**
         * @property {String} department - Identificar el de partamento al que pertenece el Empleado
         */
        department="";
        /**
         * @property {Number} salary - Identica el salario diario de un empleado
         */
        salary = 0;
        /** 
         * Construcctor que permite crear un objeto del tipo Employee
         * @param {String} name Identifica el nombre del empleado
         * @param {String} email Identifica el correo del empleado
         * @param {Number} age  Identifica la edad del empleado
         * @param {String} resume Muestra un resumen del empleado 
         * @param {*} departament - Identidica el departamento al que pertenece el empleado
         * @param {*} salary - Identidifica el salario del empleado 
         */
        constructor(name, email, age, resume, departament, salary){
            super(name, email, age, resume);//Aqui lo esta mandando a llamar
            this.department=departament;
            this.salary=salary;
        }//Contructor del superior
         /**
         * Escribe en la pagina un card de bootstrap con la informacion de un empleado
         * @param {HTMLElement} div - Elemento donde se agrego a la informacion del empleado
         */
        printInfo(div){ //  - Overwritting - Voy a usar madar a llamar del printInfo (mismo nombre) y le agrego id para poder identificar el cardBody
            super.printInfo(div);
            let cardBody = document.getElementById(`cardBody_${this.id}`);
            cardBody.insertAdjacentHTML("beforeend", 
                `<p class="card-text">${this.department}</p>
                 <p class="card-text text-end">$ ${this.salary} MXN</p>`
                );
        }//printInfo
       
    }//class Employee
    const employees = new Array();
                
                    //// Objeto

        employees.push(new Employee ("Esmeralda", "ESME@ciudadesmeralda.com",
        16, "Java FullStack Developer","Development", 450));
        employees.push(new Employee ("Ricardo", "rcervantes@GMAIL.com",
        20, "Java FullStack Developer","IT", 380));
        employees.push(new Employee ("Eduardo", "ehuertaislas@outlook.com",
        21, "Java FullStack Developer","IT", 350));

        employees.forEach((emp)=> emp.printInfo(divData));

        Person.printTotal(divData);
        
/* es lo que lo imprimia antes del employees.forEach de arriba 
 este es otro metodo mas largo de jalar la informacion de 
    cada etiqueta a las cards              
//// Constructor

    //console.log(Esme.name, Esme.age, Esme.email, Esme.resume);
    Esme.printInfo(divData);
    //console.log(Ricardo.name, Ricardo.age, Ricardo.email, Ricardo.resume);
    Ricardo.printInfo(divData);
    
    Eduardo.printInfo(divData);
    //console.log creo de las propiedades de la clase
    Person.printTotal(divData);
*/