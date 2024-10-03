// app/components/LessonList.tsx
import { Link } from "@remix-run/react";

interface Lesson {
  id: number;
  title: string;
}

interface LessonListProps {
  lessons: Lesson[];
}

export default function LessonList({ lessons }: LessonListProps) {
  return (
    <ul>
      {lessons.map((lesson) => (
        <li key={lesson.id}>
          <Link to={`/lessons/${lesson.id}`}>{lesson.title}</Link>
        </li>
      ))}
    </ul>
  );
}