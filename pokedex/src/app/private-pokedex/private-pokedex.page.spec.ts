import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivatePokedexPage } from './private-pokedex.page';

describe('PrivatePokedexPage', () => {
  let component: PrivatePokedexPage;
  let fixture: ComponentFixture<PrivatePokedexPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrivatePokedexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
