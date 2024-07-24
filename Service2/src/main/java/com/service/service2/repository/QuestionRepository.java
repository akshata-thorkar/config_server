package com.service.service2.repository;

import com.service.service2.models.Question;
import com.service.service2.models.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<Question> findByQuiz(Quiz quiz);
}
