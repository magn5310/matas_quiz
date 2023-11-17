import ProductCard from "./components/ProductCard";
import QuizCard from "./components/QuizCard";

export default function GridLayout() {
  return (
    <div className="grid grid-cols-4 gap-4 p-32 items-stretch">
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <QuizCard></QuizCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
    </div>
  );
}
