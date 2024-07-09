package com.hirademy.assistants.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hirademy.assistants.entity.Assistant;

public interface AssistantRepository extends JpaRepository<Assistant, Long>{

}
