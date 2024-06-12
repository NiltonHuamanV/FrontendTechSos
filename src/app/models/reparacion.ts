//import { DispositivoTaller} from "./dispositivotaller"

export class Reparacion{
    idReparacion: number = 0;
    FechaInicio: Date=new Date(Date.now())
    FechaFin: Date=new Date(Date.now())
    Problema: string = ""
    Estado: string = ""
    Costo: number = 0
    //dispositivoTaller: DispositivoTaller = new DispositivoTaller()

}