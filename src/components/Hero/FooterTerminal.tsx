export default function FooterTerminal() {
    return (
        <>
            <div className="mt-2">
                <span className="text-accent">$</span>{' '}
                <span>curl /api/tasks/health</span>
            </div>
            <div className="text-[#47ffd8]">
                {'{ '}
                <span className="text-[#f0ede8]">"status"</span>: "ok",{' '}
                <span className="text-[#f0ede8]">"services"</span>: 4{' }'}
            </div>
        </>
    );
}
