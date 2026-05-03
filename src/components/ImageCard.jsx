import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function ImageCard({ animal }) {
  const { name, type, price, image, category, description } = animal;
  console.log(animal);
  return (
    <Card className=" w-full items-stretch md:flex-row">
      <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-2xl sm:h-30 sm:w-30">
        <Image
          alt={name}
          className="pointer-events-none  absolute inset-0 scale-125 object-cover select-none"
          width={200}
          height={200}
          loading="lazy"
          src={image}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 text-start">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8">{name}</Card.Title>
          <Card.Description className="text-foreground text-sm font-medium">
            {description} <br />
            {type} - {category}
          </Card.Description>
        </Card.Header>
        <Card.Footer className=" flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className="-mt-6 text-sm font-medium text-foreground">
              Price: BDT {price.toLocaleString()}
            </span>
          </div>
         <Link href={`/animals/${animal.id}`}>
          <Button className="w-full sm:w-auto">View more</Button>
         </Link>
        </Card.Footer>
      </div>
    </Card>
  );
}
