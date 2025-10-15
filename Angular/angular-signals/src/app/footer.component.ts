import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    template: `
        <footer class="footer">
            <div class="container">
                <span>&copy; {{ currentYear }} Your Company. All rights reserved.</span>
            </div>
        </footer>
    `,
    styles: [`
        .footer {
            background: #b0c6db;
            padding: 1rem 0;
            text-align: center;
            font-size: 0.9rem;
            color: #6c757d;
            border-top: 1px solid #e7e7e7;
        }
        .container {
            max-width: 960px;
            margin: 0 auto;
        }
    `]
})
export class FooterComponent {
    currentYear: number = new Date().getFullYear();
}