export default function PublicationPage({ params }: { params: { slug: string } }) {
    return <div>Publication: {params.slug}</div>;
}
