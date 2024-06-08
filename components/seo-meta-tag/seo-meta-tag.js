class SEOMetaTags extends HTMLElement {
    constructor() {
        super();
        // Get title and description from attributes or default to empty strings
        const title = this.getAttribute('title') || '';
        const description = this.getAttribute('description') || '';

        // Create or update the title element with the specified content
        let titleElement = document.querySelector('title');
        if (!titleElement) {
            titleElement = document.createElement('title');
            document.head.appendChild(titleElement);
        }
        titleElement.textContent = title;

        // Create or update the meta description tag with the specified content
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', description);

        // Remove the custom element from the DOM
        this.remove();
    }
}

// Define the custom element 'seo-meta-tags' and associate it with the SEOMetaTags class
customElements.define('seo-meta-tag', SEOMetaTags);
