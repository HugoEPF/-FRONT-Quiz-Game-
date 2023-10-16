import {Component, Renderer2} from '@angular/core';

@Component({
  selector: 'app-lien',
  templateUrl: './lien.component.html',
  styleUrls: ['./lien.component.css']
})
export class LienComponent {
  imageSource = 'assets/lien_hypertexte.png';
  constructor(private renderer: Renderer2) {}
  copyToClipboard() {
    const link = 'https://www.exemple.com';
    // -------------------------------------------
    // REMPLACER PAR URL DU QUIZ
    // -----------------------------------------
    const textArea = this.renderer.createElement('textarea');
    textArea.value = link;
    this.renderer.appendChild(document.body, textArea);
    textArea.select();
    document.execCommand('copy');
    this.renderer.removeChild(document.body, textArea);
    alert('Lien copié : ' + link);
  }

}
