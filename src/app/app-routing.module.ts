import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpireTestComponent } from './empire-test/empire-test.component';
import { FizzbuzzTestComponent } from './fizzbuzz-test/fizzbuzz-test.component';
import { NasaTestComponent } from './nasa-test/nasa-test.component';
import { TestSelectorComponent } from './test-selector/test-selector.component';


const routes: Routes = [
  {path: '', component: TestSelectorComponent },
  {path: 'fizzbuzz-test', component: FizzbuzzTestComponent },
  {path: 'nasa-test', component: NasaTestComponent },
  {path: 'empire-test', component: EmpireTestComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
