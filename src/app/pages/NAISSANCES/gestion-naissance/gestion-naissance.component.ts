import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import {MatTableDataSource} from '@angular/material/table';
import { AjoutNaissanceComponent } from '../ajout-naissance/ajout-naissance.component';
import { DetailNaissanceComponent } from '../detail-naissance/detail-naissance.component';
import { ModifierNaissanceComponent } from '../modifier-naissance/modifier-naissance.component';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];


@Component({
  selector: 'gestion-naissance',
  templateUrl: './gestion-naissance.component.html',
  styleUrls: ['./gestion-naissance.component.css']
})
export class GestionNaissanceComponent implements AfterViewInit, OnInit {
  

  ngOnInit(): void {
  }
  update() {
    const dialogRef = this.dialog.open(ModifierNaissanceComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  detail() {
    const dialogRef = this.dialog.open(DetailNaissanceComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ajout() {
    const dialogRef = this.dialog.open(AjoutNaissanceComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  displayedColumns: string[] = ['id', 'prenom', 'nom', 'telephone','pere','mere', 'detail', 'modifier', 'imprimer'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }
  

  // title = "export-table-data-to-pdf-using-jspdf-example";

  head = [["PRENOM NOM "]];

  data = [["YES"]];
  
  createPdf() {
    var doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("My Team Detail", 11, 8);
    doc.getStyle("color:red")
    doc.setFontSize(11);
    doc.setTextColor(100);

    (doc as any).autoTable({
      head: this.head,
      body: this.data,

      // theme: "plain",
      // didDrawCell: (data) => {
      //   console.log(data.column.index);
      // },
    });
    // below line for Open PDF document in new tab
    doc.output("dataurlnewwindow");
    // below line for Download PDF document
    doc.save("recu de la commande.pdf");
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 10000000).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}
