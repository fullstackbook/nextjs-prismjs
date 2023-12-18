import PrismLoader from "@/components/prism-loader";

export default function Home() {
  return (
    <div>
      <pre className="language-js">
        <code className="language-js">console.log("hello world")</code>
      </pre>
      <pre className="language-ts">
        <code className="language-ts">console.log("hello world")</code>
      </pre>
      <PrismLoader />
    </div>
  );
}
