import { NgModule } from '@angular/core';
import { TestingJoinPipeModule } from './pipes/testing-join-pipe/testing-join-pipe.module';



@NgModule({
  declarations: [
  ],
  imports: [
    TestingJoinPipeModule
  ],
  exports: [
    TestingJoinPipeModule
  ]
})
export class TestingdevModule { }
